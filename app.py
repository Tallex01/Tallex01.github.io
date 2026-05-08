from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/resume-files", StaticFiles(directory="resume"), name="resume-files")






app.mount("/", StaticFiles(directory="homepage", html=True), name="site")