import artichoke from './assets/Brand/artichoke.png'
import carrot from './assets/Brand/carrot.png'
import cauli from './assets/Brand/cauli.png'
import frise from './assets/Brand/frise.png'
import greenPeans from './assets/Brand/greenPeans.png'
import greenPeas from './assets/Brand/greenPeas.png'
import mango from './assets/Brand/mango.png'
import mixedVeg from './assets/Brand/mixedVeg.png'
import okra from './assets/Brand/okra.png'
import pomegranate from './assets/Brand/pomegranate.png'
import proccoli from './assets/Brand/proccoli.png'
import pumpkin from './assets/Brand/pumpkin.png'
import straw from './assets/Brand/straw.png'

import crawliProd from './assets/Brand/crawliProd.png'
import prodArtishoki from './assets/Brand/prodArtishoki.png'
import prodCarrot from './assets/Brand/prodCarrot.png'
import prodFrise from './assets/Brand/prodFrise.png'
import prodGreenPeans from './assets/Brand/prodGreenPeans.png'
import prodGreenPeas from './assets/Brand/prodGreenPeas.png'
import prodMango from './assets/Brand/prodMango.png'
import prodMixedVeg from './assets/Brand/prodMixedVeg.png'
import prodOkra from './assets/Brand/prodOkra.png'
import prodProkoli from './assets/Brand/prodProkoli.png'
import prodPromegranaty from './assets/Brand/prodPromegranaty.png'
import prodPumpkin from './assets/Brand/prodPumpkin.png'
import prodStrow from './assets/Brand/prodStrow.png'

import artichokeIcon from './assets/Store/artichokeIcon.png'
import carrotIcon from './assets/Store/carrotIcon.png'
import cauliIcon from './assets/Store/cauliflowerIcon.png'
import friseIcon from './assets/Store/friseIcon.png'
import greenPeansIcon from './assets/Store/greenPeansIcon.png'
import greenPeasIcon from './assets/Store/greenPeasIcon.png'
import mangoIcon from './assets/Store/mangoIcon.png'
import mixedVegIcon from './assets/Store/mixVegIcon.png'
import okraIcon from './assets/Store/okraIcon.png'
import pomegranateIcon from './assets/Store/pomegaranteIcon.png'
import proccoliIcon from './assets/Store/broccoliIcon.png'
import pumpkinIcon from './assets/Store/pumpkinIcon.png'
import strawIcon from './assets/Store/strawIcon.png'

import artichokeDetails from './assets/Store/artichokeDetails.png'
import carrotDetails from './assets/Store/carrotDetails.png'
import cauliDetails from './assets/Store/cauliflowerDetails.png'
import friseDetails from './assets/Store/friesDetails.png'
import greenPeansDetails from './assets/Store/greenPeansDetails.png'
import greenPeasDetails from './assets/Store/greenPeasDetails.png'
import mangoDetails from './assets/Store/mangoDetails.png'
import mixedVegDetails from './assets/Store/mixVegDetails.png'
import okraDetails from './assets/Store/okraDetails.png'
import pomegranateDetails from './assets/Store/pomegaranteDetails.png'
import proccoliDetails from './assets/Store/broccoliDetails.png'
import pumpkinDetails from './assets/Store/pumpkinDetails.png'
import strawDetails from './assets/Store/strawDetails.png'

export const events = [
    {
        image: "https://res.cloudinary.com/dglkluhsv/image/upload/v1707220239/qxfqg9zp2cry3vvgsxgg.png",
        title: "Food Africa",
        date: "12 - 14, Dec 2023",
        description: "We Attednded this event"
    },
]

export const brandScroll = [mango, pomegranate, straw, pumpkin, frise, artichoke, carrot, cauli, greenPeans, greenPeas, mixedVeg, okra, proccoli];

export const brandFruits = [
    { name: 'Mango', image: prodMango },
    { name: 'Pomegranate', image: prodPromegranaty },
    { name: 'Strawberry', image: prodStrow }
]

export const brandVegetables = [
    { name: 'Artichoke', image: prodArtishoki },
    { name: 'Broccoli', image: prodProkoli },
    { name: 'Carrot', image: prodCarrot },
    { name: 'Cauliflower', image: crawliProd },
    { name: 'French Fries', image: prodFrise },
    { name: 'Green Beans', image: prodGreenPeans },
    { name: 'Green Peas', image: prodGreenPeas },
    { name: 'Vegetables Mix', image: prodMixedVeg },
    { name: 'Okra', image: prodOkra, },
    { name: 'Pumpkin', image: prodPumpkin },
]

export const storeTopNav = [
    { image: mangoIcon, link: '#mango' },
    { image: pomegranateIcon, link: '#pomegranate' },
    { image: strawIcon, link: '#straw' },
    { image: artichokeIcon, link: '#artichoke' },
    { image: carrotIcon, link: '#carrot' },
    { image: cauliIcon, link: '#cauli' },
    { image: friseIcon, link: '#frise' },
    { image: greenPeansIcon, link: '#greenPeans' },
    { image: greenPeasIcon, link: '#greenPeas' },
    { image: mixedVegIcon, link: '#mixedVeg' },
    { image: okraIcon, link: '#okra' },
    { image: proccoliIcon, link: '#proccoli' },
    { image: pumpkinIcon, link: '#pumpkin' },
]

export const storeFruits = [
    {
        id: 'mango',
        name: 'Mango',
        desc: 'Mango is rich in nutrients, making this a totally healthy and deliciously sweet snack. A cup of mango brings 100 calories, and 20 types of vitamins',
        varSize: 'Kate, Bowl, Naomi Slices & Cubs 10*10',
        session: 'Aug, Sep, Oct, Nov & Dec',
        images: [mangoIcon, mangoDetails]
    },
    {
        id: 'pomegranate',
        name: 'Pomegranate',
        desc: 'Pomegranate contains anti-inflammatory and antioxidants that are necessary to enhance a person’s health and protect him from inflammatory diseases',
        varSize: '116, Country Kernels',
        session: 'Aug, Sep & Oct',
        images: [pomegranateIcon, pomegranateDetails]
    },
    {
        id: 'straw',
        name: 'Strawberry',
        desc: 'Strawberries are beneficial for heart health, by helping to lower blood pressure, because they contain flavonoids and potassium, which help lower blood pressure and enhance heart health.',
        varSize: '1Festival, Fortuna, Sensation. Uncalibrated Calibrated (15:25 / 25:35 / 15:35 )',
        session: 'Jan, Feb, Mar, Apr & May',
        images: [strawIcon, strawDetails]
    }
]

export const storeVegetables = [
    {
        id: 'artichoke',
        name: 'Artichoke',
        desc: 'Our Artichoke improves liver functions eliminates dangerous toxins and fats in the digestive system',
        varSize: 'Bottoms (3/5 : 5/7 : 7/10) , with Stem , Hearts, Quarters.',
        session: 'Dec, Jan, Mar & Apr',
        images: [artichokeIcon, artichokeDetails]
    },
    {
        id: 'carrot',
        name: 'Carrot',
        desc: 'Do you know that Carrots IS Maintaining bone health, because it\'s contain some essential minerals for bones, such as phosphorus, potassium, and calcium. Our Carrots contain vitamin C, which plays a role in fighting inflammation and infection.',
        varSize: 'Cups 4x4mm',
        session: 'Dec, Jan, Feb, Mar',
        images: [carrotIcon, carrotDetails]
    },
    {
        id: 'cauli',
        name: 'Cauliflower',
        desc: 'Our Cauliflower contains a good amount of antioxidants, vitamins, and minerals that help increase the activity of the immune system',
        varSize: '( 20/40 : 30/50 : 40/60 ) mm',
        session: 'Dec, Jan, Mar & Apr',
        images: [cauliIcon, cauliDetails]
    },
    {
        id: 'frise',
        name: 'French Fries',
        desc: 'French fries provide vitamin K, vitamin B6, manganese, magnesium, copper, potassium, iron, phosphorus and pantothenic acid. French fries help reduce arthritis, reduce cholesterol, strengthen immunity, support digestion, and provide energy',
        varSize: 'all regular cuts (6x6 / 7x7 / 9x9 /  10x10 / 12x12 / 14x14)',
        session: 'Jan, Feb, Mar, Apr',
        images: [friseIcon, friseDetails]
    },
    {
        id: 'greenPeans',
        name: 'Green Beans',
        desc: 'Our Green beans contain a large percentage of chlorophyll, which contributes strongly to reducing the spread of cancer risk in the body.',
        varSize: 'Whole & Cuts',
        session: 'May, Jun, Oct & Jan',
        images: [greenPeansIcon, greenPeansDetails]
    },
    {
        id: 'greenPeas',
        name: 'Green Peas',
        desc: 'It contains abundant vegetable protein. It also has high nutritional value. Peas contain many important nutrients that are completely beneficial to human health',
        varSize: 'Fine, Very Fine, Medium Fine',
        session: 'Jan, Feb, Mar & Apr',
        images: [greenPeasIcon, greenPeasDetails]
    },
    {
        id: 'mixedVeg',
        name: 'Vegetables Mix',
        desc: 'Superfoods and a source of vitamins and minerals. Vegetables are a rich source of many important nutrients for the body and for strengthening its immunity. Help in losing weight, Promoting digestive health, Preventing heart and arterial disease, and Diabetes prevention.',
        varSize: 'Peas & Carrots / Peas, Carrots, Green / Beans & Corn / Cauliflower, Green beans, Broccoli, Corn & Carrots / Peas, Carrots & Green beans.',
        session: 'All around Year',
        images: [mixedVegIcon, mixedVegDetails]
    },
    {
        id: 'okra',
        name: 'Okra',
        desc: 'Okra is actually rich in antioxidants, which play a vital role in maintaining overall health and well-being. The antioxidants in okra water, such as flavonoids, polyphenols and vitamin C',
        varSize: 'Extra, Zero, One',
        session: 'Jul, Aug, & Sep',
        images: [okraIcon, okraDetails]
    },

    {
        id: 'proccoli',
        name: 'Broccoli',
        desc: 'Our broccoli is rich in antioxidants that protect cells from damage and cancer. It contains abundant amounts of minerals and vitamins.',
        varSize: '( 20/40 : 30/50 : 40/60 ) mm',
        session: 'Dec, Jan, Mar & Apr',
        images: [proccoliIcon, proccoliDetails]
    },
    {
        id: 'pumpkin',
        name: 'Pumpkin',
        desc: 'Our Pumpkin is rich in fiber, pectinand, and vitamin B to stimulate the work of brain cells.',
        varSize: 'Chunks 10*10',
        session: 'Nov, Dec, Jan & Feb',
        images: [pumpkinIcon, pumpkinDetails]
    },
]