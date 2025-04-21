# Grafana Configuration
Note: 1.18 influxdb 
influxdb
influxQl
url: http://influxdb:8086
Database: k6
User: k6
Password: k6pass
Http Method: Get


Official K6 Dashboard ID: 2587

SELECT mean("value") FROM "http_req_duration" WHERE $timeFilter GROUP BY time($__interval) fill(null)

