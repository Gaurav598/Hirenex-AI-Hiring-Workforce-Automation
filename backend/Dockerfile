# ===================================================
# Hirynex Backend - Production Dockerfile
# ===================================================
FROM python:3.12-slim AS runner

WORKDIR /app

# Ensure Python doesn't buffer stdout/stderr and avoids bytecode writes
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

# Install curl for healthcheck and certificates for external HTTPS API calls
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create dedicated non-root user and group
RUN groupadd -g 10001 appgroup && \
    useradd -u 10001 -g appgroup -s /bin/sh -d /app appuser

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application code and database seed script
COPY app ./app
COPY seed.py .

# Create persistent data directory for SQLite / state and assign ownership
RUN mkdir -p /app/data && chown -R appuser:appgroup /app

# Switch to non-root user for security
USER appuser

EXPOSE 8000

# Production Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/api/health || exit 1

# Start FastAPI using production Uvicorn server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
