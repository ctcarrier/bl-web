package controllers

import play.api.mvc.{Action, Controller}

/**
 * Created by ccarrier for bl-web.
 * at 11:51 AM on 12/20/13
 */
object RedirectAll extends Controller {

  def toLanding(trash: String) = Action {
    Redirect(routes.ImageApi.getImageInfo("random"))
  }

}
