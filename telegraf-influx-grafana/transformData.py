from pathlib import Path
from datetime import datetime
import json
import re

# Function to sanitize tag values (escaping spaces, commas, equal signs)
def sanitize_tag_value(value):
    return (
        str(value)
        .replace(" ", "\\ ")
        .replace(",", "\\,")
        .replace("=", "\\=")
    )

input_file = "json-telegraf/results/output_1745149206.json"
output_file = input_file.replace(".json", ".influx")

with open(input_file, "r") as fin, open(output_file, "w") as fout:
    for line in fin:
        try:
            obj = json.loads(line)
            if obj.get("type") == "Point":
                metric = obj["metric"]
                data = obj["data"]
                value = data["value"]
                tags = data.get("tags", {})

                # If no tags exist, add a dummy tag to avoid the parse error
                if not tags:
                    tags = {"placeholder": "none"}

                # Convert ISO time with nanoseconds to Unix timestamp in nanoseconds
                # Remove trailing Z
                iso_time = data["time"].replace("Z", "")
                match = re.match(r"(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})\.(\d+)", iso_time)
                if match:
                    base_time_str, nano_str = match.groups()
                    base_time = datetime.strptime(base_time_str, "%Y-%m-%dT%H:%M:%S")
                    nanos = int(nano_str.ljust(9, "0"))  # pad to 9 digits
                    timestamp = int(base_time.timestamp() * 1e9) + nanos
                else:
                    continue  # skip if can't parse

                # Create the InfluxDB line protocol string
                tag_str = ",".join(f"{k}={sanitize_tag_value(v)}" for k, v in tags.items() if v)
                influx_line = f"{metric},{tag_str} value={value} {timestamp}"

                fout.write(influx_line + "\n")
        except Exception as e:
            print("Skipping line due to error:", e)


