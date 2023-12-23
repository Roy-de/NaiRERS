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


def get_validated_input(input_data: InputData):
    return pd.DataFrame([input_data.latitude, input_data.longitude])


@app.post("/predict")
def predict(input_data: List[InputData] = Depends(get_validated_input)):
    try:
        # Make predictions with the neural network
        # print("Input data:", input_data)
        # neural_network_predictions = neural_network_model.predict(input_data)
        # print(f"Predictions: {neural_network_predictions}")
        # Apply clustering based on neural network predictions
        cluster_label = loaded_clustering_model.fit_predict(input_data)

        # Return the cluster label
        return {"cluster_label": int(cluster_label[0])}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
