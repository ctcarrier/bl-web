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
  final val RANDOM_TAG_URL = config.getString("blrest.random_tag_url")
  final val TAG_RESPONSE_URL = config.getString("blrest.tag_response_url")

  def hello(name: String) = Action {
    Ok(Json.toJson((Greeting(name, "Hello "))))
  }

  /*def getImageInfo(key: String) = Action.async {
    for {
      metaResp <- WS.url("%s/%s".format(BASE_URL, key)).get()
      tagResp <- WS.url(RANDOM_TAG_URL).get()

    } yield Ok(randomimage.render(Json.fromJson[ImageMeta](metaResp.json).get, Json.fromJson[Tag](tagResp.json).get))
  }*/

  def getImageInfo(key: String) = Action.async {
    for {
      metaResp <- WS.url("%s/%s".format(BASE_URL, key)).get()
    } yield Ok(metaResp.json)
  }

  def getTag(key: String) = Action.async {



      WS.url(RANDOM_TAG_URL).get().map({ tagResp =>
        val tag = Json.fromJson[Tag](tagResp.json).get
        val tagWithQuestion = tag.copy(questionText = Some(tag.displayPattern.format(tag.name)))
        Ok(Json.toJson(tagWithQuestion))
      })
  }

  def saveTagResponse = Action.async { request =>
    val tagResponse = Json.fromJson[TagResponse](request.body.asJson.get).get

    WS.url(TAG_RESPONSE_URL).post(Json.toJson(tagResponse)).map({ tagResponseResp =>
      Created(tagResponseResp.json)
    })
  }
}
