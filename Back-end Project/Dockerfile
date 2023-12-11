# Étape 1: Utiliser une image de base avec Java 17
FROM openjdk:17-jdk-alpine as build
RUN mkdir -p /app

WORKDIR /app

COPY target/*.jar /app/app.jar

EXPOSE 8082

CMD ["java", "-jar", "app.jar"]
