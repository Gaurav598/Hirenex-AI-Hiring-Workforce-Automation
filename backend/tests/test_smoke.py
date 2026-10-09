"""Local-only API initialization checks; no lifespan or external integrations."""

import os
import unittest

os.environ["DATABASE_URL"] = "sqlite://"

from fastapi.testclient import TestClient  # noqa: E402
from app.main import app  # noqa: E402


class AppSmokeTest(unittest.TestCase):
    def test_root_and_health(self) -> None:
        client = TestClient(app)
        try:
            root = client.get("/")
            self.assertEqual(root.status_code, 200)
            self.assertEqual(root.json()["product"], "Hirynex API")

            health = client.get("/api/health")
            self.assertEqual(health.status_code, 200)
        finally:
            client.close()


if __name__ == "__main__":
    unittest.main()
