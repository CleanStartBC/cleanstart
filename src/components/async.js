import Loadable from "react-loadable";
import Loading from "../Loading";

const AsyncFaq = Loadable({
  loader: () => import("./index").then(m => m.Faq),
  loading: Loading
});
const AsyncPeople = Loadable({
  loader: () => import("./index").then(m => m.People),
  loading: Loading
});
const AsyncImageBlocks = Loadable({
  loader: () => import("./index").then(m => m.ImageBlocks),
  loading: Loading
});
const AsyncPostIndex = Loadable({
  loader: () => import("./index").then(m => m.PostIndex),
  loading: Loading
});
const AsyncIcon = Loadable({
  loader: () => import("./index").then(m => m.Icon),
  loading: Loading
});
const AsyncHeader = Loadable({
  loader: () => import("./index").then(m => m.Header),
  loading: Loading
});
const AsyncLogos = Loadable({
  loader: () => import("./index").then(m => m.Logos),
  loading: Loading
});
const AsyncPricing = Loadable({
  loader: () => import("./index").then(m => m.Pricing),
  loading: Loading
});
const AsyncCallToAction = Loadable({
  loader: () => import("./index").then(m => m.CallToAction),
  loading: Loading
});
const AsyncTestimonials = Loadable({
  loader: () => import("./index").then(m => m.Testimonials),
  loading: Loading
});
const AsyncBulletList = Loadable({
  loader: () => import("./index").then(m => m.BulletList),
  loading: Loading
});
const AsyncContact = Loadable({
  loader: () => import("./index").then(m => m.Contact),
  loading: Loading
});
const AsyncColumns = Loadable({
  loader: () => import("./index").then(m => m.Columns),
  loading: Loading
});
const AsyncImageIconList = Loadable({
  loader: () => import("./index").then(m => m.ImageIconList),
  loading: Loading
});
const AsyncImageText = Loadable({
  loader: () => import("./index").then(m => m.ImageText),
  loading: Loading
});
const AsyncCarousel = Loadable({
  loader: () => import("./index").then(m => m.Carousel),
  loading: Loading
});

const AsyncHome = Loadable({
  loader: () => import("./index").then(m => m.Home),
  loading: Loading
});

const AsyncPage = Loadable({
  loader: () => import("./index").then(m => m.Page),
  loading: Loading
});

const AsyncPreview = Loadable({
  loader: () => import("./index").then(m => m.Preview),
  loading: Loading
});

const AsyncNotFound = Loadable({
  loader: () => import("./index").then(m => m.NotFound),
  loading: Loading
});

export {
  AsyncCarousel,
  AsyncFaq,
  AsyncPeople,
  AsyncImageBlocks,
  AsyncPostIndex,
  AsyncIcon,
  AsyncHeader,
  AsyncLogos,
  AsyncPricing,
  AsyncCallToAction,
  AsyncTestimonials,
  AsyncBulletList,
  AsyncContact,
  AsyncColumns,
  AsyncImageIconList,
  AsyncImageText,
  AsyncHome,
  AsyncPage,
  AsyncPreview,
  AsyncNotFound
}
