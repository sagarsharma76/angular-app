/* global malarkey:false, moment:false */

import { config } from "./index.config";
import { routerConfig } from "./index.route";
import { runBlock } from "./index.run";
import { MainController } from "./main/main.controller";
import { GithubContributorService } from "../app/components/githubContributor/githubContributor.service";
import { WebDevTecService } from "../app/components/webDevTec/webDevTec.service";
import { NavbarDirective } from "../app/components/navbar/navbar.directive";
import { MalarkeyDirective } from "../app/components/malarkey/malarkey.directive";
import { TitleController } from "./title/title.controller";
import { TitleService } from "./title/title.service";
import { HEROES } from "./mock-titles";
import { TitleDetailController } from "./title-details/title-details.controller";

angular
  .module("project", [
    "ngAnimate",
    "ngCookies",
    "ngTouch",
    "ngSanitize",
    "ngMessages",
    "ngAria",
    "ngRoute",
    "toastr"
  ])
  .constant("malarkey", malarkey)
  .constant("moment", moment)
  .constant("heroes", HEROES)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service("githubContributor", GithubContributorService)
  .service("webDevTec", WebDevTecService)
  .service("titleService", TitleService)
  .controller("MainController", MainController)
  .controller("TitleController", TitleController)
  .controller("TitleDetailController", TitleDetailController)
  .directive("acmeNavbar", NavbarDirective)
  .directive("acmeMalarkey", MalarkeyDirective);
