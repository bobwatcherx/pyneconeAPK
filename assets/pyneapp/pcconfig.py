import pynecone as pc

class PyneappConfig(pc.Config):
    pass

config = PyneappConfig(
    app_name="pyneapp",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
