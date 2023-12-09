# Étape 1: Utiliser une image de base avec Java 17
FROM openjdk:17-jdk-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /workspace/app

# Copier le pom.xml et les fichiers sources locaux dans l'image
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Construire l'application avec Maven
RUN ./mvnw install -DskipTests

# Étape 2: Utiliser une nouvelle image pour exécuter l'application
FROM openjdk:17-jdk-alpine

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 8081

# Copier le JAR construit depuis l'étape de build
COPY --from=build /workspace/app/target/projet_Backend-0.0.1-SNAPSHOT.jar app.jar

# Commande pour exécuter l'application
ENTRYPOINT ["java","-jar","/app.jar"]
