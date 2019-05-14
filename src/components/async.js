import Loadable from "react-loadable";


const AsyncFaq = Loadable({
  loader: () => import("./index").then(m => m.Faq),
  loading: () => null,
});
const AsyncPeople = Loadable({
  loader: () => import("./index").then(m => m.People),
  loading: () => null,
});
const AsyncImageBlocks = Loadable({
  loader: () => import("./index").then(m => m.ImageBlocks),
  loading: () => null,
});
const AsyncPostIndex = Loadable({
  loader: () => import("./index").then(m => m.PostIndex),
  loading: () => null,
});
const AsyncIcon = Loadable({
  loader: () => import("./index").then(m => m.Icon),
  loading: () => null,
});
const AsyncHeader = Loadable({
  loader: () => import("./index").then(m => m.Header),
  loading: () => null,
});
const AsyncLogos = Loadable({
  loader: () => import("./index").then(m => m.Logos),
  loading: () => null,
});
const AsyncPricing = Loadable({
  loader: () => import("./index").then(m => m.Pricing),
  loading: () => null,
});
const AsyncCallToAction = Loadable({
  loader: () => import("./index").then(m => m.CallToAction),
  loading: () => null,
});
const AsyncTestimonials = Loadable({
  loader: () => import("./index").then(m => m.Testimonials),
  loading: () => null,
});
const AsyncBulletList = Loadable({
  loader: () => import("./index").then(m => m.BulletList),
  loading: () => null,
});
const AsyncContact = Loadable({
  loader: () => import("./index").then(m => m.Contact),
  loading: () => null,
});
const AsyncColumns = Loadable({
  loader: () => import("./index").then(m => m.Columns),
  loading: () => null,
});
const AsyncImageIconList = Loadable({
  loader: () => import("./index").then(m => m.ImageIconList),
  loading: () => null,
});
const AsyncImageText = Loadable({
  loader: () => import("./index").then(m => m.ImageText),
  loading: () => null,
});
const AsyncCarousel = Loadable({
  loader: () => import("./index").then(m => m.Carousel),
  loading: () => null,
});

const AsyncHome = Loadable({
  loader: () => import("./index").then(m => m.Home),
  loading: () => null,
});

const AsyncPage = Loadable({
  loader: () => import("./index").then(m => m.Page),
  loading: () => null,
});

const AsyncPreview = Loadable({
  loader: () => import("./index").then(m => m.Preview),
  loading: () => null,
});

const AsyncNotFound = Loadable({
  loader: () => import("./index").then(m => m.NotFound),
  loading: () => null,
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
