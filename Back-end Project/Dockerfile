# Étape 1: Utiliser une image de base avec Java 17
FROM openjdk:17-jdk-alpine as build
RUN mkdir -p /app

WORKDIR /app

COPY target/projet_Backend-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8082

CMD ["java", "-jar", "app.jar"]
