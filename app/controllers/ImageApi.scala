package controllers

import models._
import play.api._
import play.api.mvc._
import play.api.libs.json
import play.api.libs.json._
import play.api.libs.ws.WS
import com.typesafe.config.ConfigFactory
import scala.concurrent.ExecutionContext.Implicits.global

import views.html._

/**
 * Created by ccarrier for bl-web.
 * at 9:59 AM on 12/18/13
 */
object ImageApi extends Controller {

  val config = ConfigFactory.load()
  final val BASE_URL = config.getString("blrest.base_url")

  def hello(name: String) = Action {
    Ok(Json.toJson((Greeting(name, "Hello "))))
  }

  def getImageInfo(key: String) = Action.async {
    WS.url("%s/%s".format(BASE_URL, key)).get().map { response =>
      val imageMeta = Json.fromJson[ImageMeta](response.json).get
      Ok(randomimage.render(imageMeta))
    }
  }
}
