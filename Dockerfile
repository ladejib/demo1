FROM python:3.13-bookworm

WORKDIR /app
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app/. .

RUN python -m pip check

EXPOSE 5000
CMD ["python", "app.py"]
