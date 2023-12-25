from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
from sklearn.metrics.pairwise import haversine_distances
from math import radians
from pydantic import BaseModel
from typing import List
import numpy as np
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change as needed for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all HTTP headers
)

# Load clustering model
loaded_clustering_model = joblib.load("model/agg_model.pkl")


class InputData(BaseModel):
    latitude: float
    longitude: float


@app.post("/predict")
async def predict(input_data: InputData):
    try:
        # Extract coordinates from the input data
        single_point = np.array([[input_data.latitude, input_data.longitude]])

        # Predict the cluster for the single point
        cluster = loaded_clustering_model.predict(single_point)

        # Print and return the predicted cluster label
        print(f"Predicted cluster: {cluster}")
        return {"cluster": int(cluster[0])}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/neighbouring-clusters")
async def get_neighbours(input_data : InputData):
    try:
        single_point = [input_data.latitude,input_data.longitude]
        #Get neighbouring clusters
        cluster_centers = loaded_clustering_model.cluster_centers_
        def haversine_distance(coord1, coord2):
            coord1_rad = [radians(_) for _ in coord1]
            coord2_rad = [radians(_) for _ in coord2]
            result = haversine_distances([coord1_rad, coord2_rad])
            return result * 6371000  # Multiply by Earth radius to get distance in meters

        # Calculate distances between the single point and each cluster centroid
        distances_to_clusters = [haversine_distance(single_point, centroid)[0][1]/1000 for centroid in cluster_centers]

        # Print distances
        for i, distance in enumerate(distances_to_clusters):
            print(f"Distance from the single point to Cluster {i}: {distance:.2f} kilometers")
        
        return {f"Distance from the single point to Cluster {i}": f"{distance:.2f} kilometers" for i, distance in enumerate(distances_to_clusters)}
    except Exception as e:
        raise HTTPException(status_code=500,detail = str(e))
