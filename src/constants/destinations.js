// constants/destinations.js

import phuketImg from "../assets/images/phuketImg.jpg";
import kelingkingImg from "../assets/images/kelingkingImg.jpg";
import mtBromoImg from "../assets/images/mtBromoImg.jpg";
import oldBaganImg from "../assets/images/oldBaganImg.jpg";
import ubudImg from "../assets/images/ubudImg.jpg";
import marinaBayImg from "../assets/images/marinaBayImg.jpg";
import mtFujiImg from "../assets/images/mtFujiImg.jpg";
import padarIslandImg from "../assets/images/padarIslandImg.jpg";

export const destinationsSectionInfo = {
    title: "Find Out The Best Travel Choice in Asia",
    description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
};

export const destinationTabs = [
    { id: "destination", label: "Destination" },
    { id: "accomodation", label: "Accomodation" },
    { id: "activity", label: "Activity" },
];

export const destinations = [
    {
        id: 1,
        name: "Phuket",
        location: "Myanmar",
        price: "$40",
        image: phuketImg,
        href: "/destinations/phuket",
        category: "destination",
    },
    {
        id: 2,
        name: "Kelingking",
        location: "Indonesia",
        price: "$20",
        image: kelingkingImg,
        href: "/destinations/kelingking",
        category: "destination",
    },
    {
        id: 3,
        name: "Mt. Bromo",
        location: "Indonesia",
        price: "$35",
        image: mtBromoImg,
        href: "/destinations/mt-bromo",
        category: "destination",
    },
    {
        id: 4,
        name: "Old Bagan",
        location: "Myanmar",
        price: "$18",
        image: oldBaganImg,
        href: "/destinations/old-bagan",
        category: "destination",
    },
    {
        id: 5,
        name: "Ubud",
        location: "Indonesia",
        price: "$18",
        image: ubudImg,
        href: "/destinations/ubud",
        category: "destination",
    },
    {
        id: 6,
        name: "Marina Bay",
        location: "Singapore",
        price: "$24",
        image: marinaBayImg,
        href: "/destinations/marina-bay",
        category: "destination",
    },
    {
        id: 7,
        name: "Mt. Fuji",
        location: "Japan",
        price: "$48",
        image: mtFujiImg,
        href: "/destinations/mt-fuji",
        category: "destination",
    },
    {
        id: 8,
        name: "Padar Island",
        location: "Indonesia",
        price: "$26",
        image: padarIslandImg,
        href: "/destinations/padar-island",
        category: "destination",
    },
];