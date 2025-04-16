# Create venv and activate
python3 -m venv myvenv
source myvenv/bin/activate
# To deactivate
deactivate


# Clone the repo (if applicable)
 git clone https://github.com/your-repo/ui-testing-app.git
 cd ui-testing-app

# Build the Docker image
docker build --no-cache -t ui-testing-app .

# Run the container
docker run -p 5000:5000 ui-testing-ap

