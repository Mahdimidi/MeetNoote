# Use a base image with Java 17
FROM openjdk:17-jdk-alpine as build

# Expose the port the application will run on
EXPOSE 8081

# Copy the built JAR from the build stage
COPY ./target/projet_Backend-0.0.1-SNAPSHOT.jar app.jar

# Command to execute the application
ENTRYPOINT ["java","-jar","/app.jar"]
