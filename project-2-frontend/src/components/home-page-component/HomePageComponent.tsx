import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Img1 from "../../assets/carousel1.jpg";
import Img2 from "../../assets/carousel2.jpg";
import Store from "../../assets/store.jpg";
import { RouteComponentProps } from "react-router";

interface IHomePageProps extends RouteComponentProps {}

export class HomePageComponent extends React.Component<IHomePageProps, any> {
  render() {
    // Carousel Image items
    const items = [
      {
        src: Img1,
        altText: "Slide 1",
        caption: "Browse our extensive wine collection today!",
        header: "Feeling Boujee?",
        key: "1"
      },
      {
        src: Img2,
        altText: "Slide 2",
        caption: "Make the night right with one of our finest champagnes!",
        header: "Special occasion?",
        key: "2"
      },
      {
        src: Store,
        altText: "Slide 3",
        caption: "Come visit us at one of our locations across the U.S!",
        header: "There's more in store!",
        key: "3"
      }
    ];

    return (
      <div>
        {/* Carousel Component */}
        {/* Find a way to make the carousel clickable */}
        <UncontrolledCarousel items={items} />
        {/* Try to add the four sections at the bottom */}
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    );
  }
}
