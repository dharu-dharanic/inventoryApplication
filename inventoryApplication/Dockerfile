# Use Maven with Java 22 to build the project
FROM maven:3.9.9-eclipse-temurin-22 AS builder

# Create a working directory
WORKDIR /app

# Copy everything into the container
COPY . .

# Build the Spring Boot application
RUN mvn clean package -DskipTests

# ---------- Runtime Stage ----------

FROM eclipse-temurin:22-jre

WORKDIR /app

# Copy the generated JAR from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Spring Boot runs on port 9898
EXPOSE 9898

# Start the application
ENTRYPOINT ["java","-jar","app.jar"]