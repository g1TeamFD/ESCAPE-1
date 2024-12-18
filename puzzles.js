import { sceneImages } from '../assets/images';

export const puzzles = [
  {
    id: 1,
    title: 'Laboratory Access',
    scene: 'Security Terminal',
    timeLimit: 120,
    description: "The first challenge is accessing Dr. Frost's laboratory.",
    puzzle:
      "Dr. Frost's password hint reads: 'Where magic meets science - count the elements of Christmas joy (🎄+🎁+🎅) multiplied by Rudolph power.'",
    hint: "Count the Christmas elements (3) and Rudolph power = Rudolph's position in the team (position 1).",
    answer: '3',
    image: sceneImages.securityTerminal,
  },
  {
    id: 2,
    title: 'The Recipe Decoder',
    scene: "Dr. Frost's Digital Notebook",
    timeLimit: 120,
    description:
      "You've found Dr. Frost's encrypted recipe for Christmas Magic.",
    puzzle:
      'Decode the ingredient FKRFRODWH using the Christmas cipher. Each letter is shift forward by a shift value. The shift value is the number of the Wise Men who brought gifts of gold, frankincense, and myrrh to baby Jesus.',
    hint: 'This ingredient is rich, smooth, and brown, used for making hot drinks and desserts',
    answer: 'CHOCOLATE',
    image: sceneImages.digitalNotebook,
  },
  {
    id: 3,
    title: 'The Energy Crystal Alignment',
    scene: 'Magic Generator Room',
    timeLimit: 120,
    description:
      'The Christmas Magic Generator needs precise crystal alignment.',
    puzzle:
      'Arrange the crystals where Red faces Green, Silver diagonal to Gold, forming a snowflake. Enter the sequence of colors from top to bottom.',
    hint: 'Start from the center and work your way out in a symmetrical pattern, start with R (R for red, G for Green, S for Silver...). Answer has 5 letters.',
    answer: 'RGSRG',
    image: sceneImages.generatorRoom,
  },
  {
    id: 4,
    title: 'Time-Space Calibration',
    scene: 'Time Dilation Chamber',
    timeLimit: 120,
    description:
      'Calibrate the time dilation settings for Christmas Eve delivery.',
    puzzle:
      "Complete the sequence: 1823 (First 'A Visit from St. Nicholas'), ???? (Rudolph's first appearance), ???? (First artificial Christmas tree), 2023",
    hint: 'Combine 2 missing year in the format YYYYYYYY',
    answer: '19391880',
    image: sceneImages.timeChamber,
  },
  {
    id: 5,
    title: 'The Magic Synthesis',
    scene: 'Main Laboratory Chamber',
    timeLimit: 120,
    description: 'Everything is ready for the final activation sequence.',
    puzzle:
      "Dr. Frost's note reads: 'When all elements align, the magic sequence appears in the workshop's heart.' Combine the first digit of each previous answer.",
    hint: 'Combine the first number from each of your previous answer (only the answer that has a number counts). The Answer is in format -----, with - is a number',
    answer: '31939',
    image: sceneImages.mainChamber,
  },
];
