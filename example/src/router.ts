import { PetiteRouter } from "@coder-ka/petite-router";
import { createBrowserHistory } from "history";

const router =  PetiteRouter({
  history: createBrowserHistory(),
});

export const Route = router.Route
export const history = router.history