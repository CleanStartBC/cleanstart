import React, { Component } from 'react';
import {
  AsyncBulletList,
  AsyncCallToAction,
  AsyncCarousel,
  AsyncContact,
  AsyncColumns,
	AsyncFaq,
  AsyncHeader,
	AsyncImageBlocks,
  AsyncImageIconList,
  AsyncImageText,
	AsyncIcon,
	AsyncLogos,
  AsyncPeople,
  AsyncPostIndex,
	AsyncPricing,
	AsyncTestimonials,
  AsyncMenu,
  AsyncSocialMedia
} from './async';

export default class SliceZone extends Component {
  render() {
    return this.props.sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case("bulletlist"):
          return <AsyncBulletList slice={slice} key={`slice-` + index} />
        case("call_to_action"):
          return <AsyncCallToAction slice={slice} key={`slice-` + index} />
        case("columns"):
          return <AsyncColumns slice={slice} key={`slice-` + index} />
        case("contact"):
          return <AsyncContact slice={slice} key={`slice-` + index}/>
        case("faq"):
          return <AsyncFaq slice={slice} key={`slice-` + index} />
        case("header"):
          return <AsyncHeader slice={slice} key={`slice-` + index} />
        case("icon"):
          return <AsyncIcon slice={slice} key={`slice-` + index} />
        case("image_block"):
          return <AsyncImageBlocks slice={slice} key={`slice-` + index} />
        case("image_icon_list"):
          return <AsyncImageIconList slice={slice} key={`slice-` + index} />
        case("image_text"):
          return <AsyncImageText slice={slice} key={`slice-` + index} />
        case("logos"):
          return <AsyncLogos slice={slice} key={`slice-` + index} />
        case("people"):
          return <AsyncPeople slice={slice} key={`slice-` + index} />
        case("posts"):
          return <AsyncPostIndex slice={slice} key={`slice-` + index} />
        case("pricing"):
          return <AsyncPricing slice={slice}  key={`slice-` + index} />
        case("slider"):
          return <AsyncCarousel slice={slice} key={`slice-` + index} />
        case("testimonials"):
          return <AsyncTestimonials slice={slice} key={`slice-` + index} />
        case("menu"):
          return <AsyncMenu slice={slice} key={`slice-` + index} />
          case("social_media"):
            return <AsyncSocialMedia slice={slice} key={`slice-` + index} />
        default:
          return null;
      }
    })
  }
}
