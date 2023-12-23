# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory to /app
WORKDIR /app

# Copy only the requirements file initially
COPY requirements.txt /app/
# Update pip
RUN pip install --upgrade pip
# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt -vv

# Copy the rest of the application code
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World
# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
