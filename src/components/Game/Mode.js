import PaperSvg from "../../assets/images/icon-paper.svg";
import ScissorsSvg from "../../assets/images/icon-scissors.svg";
import RockSvg from "../../assets/images/icon-rock.svg";
import LizardSvg from "../../assets/images/icon-lizard.svg";
import SpockSvg from "../../assets/images/icon-spock.svg";
import TriangleSvg from "../../assets/images/bg-triangle.svg";
import PentagonSvg from "../../assets/images/bg-pentagon.svg"

export const original = {
    background: TriangleSvg,
    options: [
        {
            name: "paper",
            beat: ["rock"],
            svg: PaperSvg,
            gridArea: "1 / 1 / 2 / 2",
            left: {
                mobile: "0",
                desktop: "60px"
            },
            top: {
                mobile: "0",
                desktop: "-50px"
            }
        },
        {
            name: "scissors",
            beat: ["paper"],
            svg: ScissorsSvg,
            gridArea: "1 / 3 / 2 / 3",
            left: {
                mobile: "0",
                desktop: "-60px"
            },
            top: {
                mobile: "0",
                desktop: "-50px"
            }
        },
        {
            name: "rock",
            beat: ["scissors"],
            svg: RockSvg,
            gridArea: "2 / 2 / 3 / 2",
            left: {
                mobile: "0",
                desktop: "0"
            },
            top: {
                mobile: "0",
                desktop: "-60px"
            }
        },
    ]
};

export const bonus = {
    background: PentagonSvg,
    options: [
        {
            name: "scissors",
            beat: ["paper", "lizard"],
            svg: ScissorsSvg,
            gridArea: "1 / 2 / 2 / 3",
            left: {
                mobile: "0",
                desktop: "0"
            },
            top: {
                mobile: "-10px",
                desktop: "-25px"
            }
        },
        {
            name: "paper",
            beat: ["rock", "spock"],
            svg: PaperSvg,
            gridArea: "2 / 3 / 3 / 3",
            left: {
                mobile: "0",
                desktop: "0"
            },
            top: {
                mobile: "-25px",
                desktop: "-50px"
            }
        },
        {
            name: "rock",
            beat: ["scissors", "lizard"],
            svg: RockSvg,
            gridArea: "3 / 3 / 4 / 4",
            left: {
                mobile: "-25px",
                desktop: "-25px"
            },
            top: {
                mobile: "20px",
                desktop: "-10px"
            }
        },
        {
            name: "lizard",
            beat: ["spock", "paper"],
            svg: LizardSvg,
            gridArea: "3 / 2 / 4 / 3",
            left: {
                mobile: "-90px",
                desktop: "-100px"
            },
            top: {
                mobile: "20px",
                desktop: "-10px"
            }
        },
        {
            name: "spock",
            beat: ["scissors", "rock"],
            svg: SpockSvg,
            gridArea: "2 / 1 / 3 / 2",
            left: {
                mobile: "0",
                desktop: "0"
            },
            top: {
                mobile: "-25px",
                desktop: "-50px"
            }
        }
    ]
};