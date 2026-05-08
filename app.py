from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static/index.html at '/' and static assets from the same directory.
app.mount("/", StaticFiles(directory="static", html=True), name="site")