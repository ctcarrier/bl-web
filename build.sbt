import play.Project._

name := """bl-web"""

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  // Select Play modules
  //jdbc,      // The JDBC connection pool and the play.api.db API
  //anorm,     // Scala RDBMS Library
  //javaJdbc,  // Java database API
  //javaEbean, // Java Ebean plugin
  //javaJpa,   // Java JPA plugin
  //filters,   // A set of built-in filters
  javaCore,  // The core Java API
  // WebJars pull in client-side web libraries
  "org.webjars" %% "webjars-play" % "2.2.0",
  "org.webjars" % "bootstrap" % "3.0.3",
  "org.webjars" % "angularjs" % "1.2.5",
  "org.webjars" % "requirejs" % "2.1.8"
  // Add your own project dependencies in the form:
  // "group" % "artifact" % "version"
)

resolvers ++= Seq(
	"JBoss repository" at "https://repository.jboss.org/nexus/content/repositories/",
        "Scala-Tools Maven2 Snapshots Repository" at "http://scala-tools.org/repo-snapshots",
	"Typesafe Releases" at "http://repo.typesafe.com/typesafe/releases/"
)

playScalaSettings

atmosPlaySettings
