from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import joblib
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
# Load neural network
neural_network_model = tf.keras.models.load_model("model")

# Load clustering model
loaded_clustering_model = joblib.load("model/agg_model.pkl")


class InputData(BaseModel):
    latitude: float
    longitude: float


@app.post("/predict")
async def predict(input_data: InputData):
    try:
        new_data = pd.DataFrame({'latitude': [input_data.latitude],
                                    'longitude': [input_data.longitude]})
        new_data = new_data.astype(np.float64)
        print(f"New data {new_data}")
        cluster_label = loaded_clustering_model.predict(new_data)

        # Return the cluster label
        return {"cluster_label": int(cluster_label[0])}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
