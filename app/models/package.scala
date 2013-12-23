import play.api.libs.json.Json

/**
 * Created by ccarrier for hello-play.
 * at 5:27 PM on 12/18/13
 */
package object models {

  implicit val greetingFormat = Json.format[Greeting]
  implicit val flickrFormat = Json.format[FlickrData]
  implicit val imageMetaFormat = Json.format[ImageMeta]

  implicit val predicateFormat = Json.format[Predicate]
  implicit val tagFormat = Json.format[Tag]
  implicit val responseFormat = Json.format[TagResponse]
}
