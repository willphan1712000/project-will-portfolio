type Content = Array<{
    heading: string,
    des: string
}>

const pictureContent: Content = [
        {
            heading: "Lookout Mountain - Tennessee, USA",
            des: ""
        },
        {
            heading: "Ruby Falls - Tennessee, USA",
            des: ""
        },
        {
            heading: "North Carolina, USA",
            des: ""
        },
        {
            heading: "Chicago 1 - Illinois, USA",
            des: "This is THE BEAN at night"
        },
        {
            heading: "Chicago 2 - Illinois, USA",
            des: "This picture was taken close to the Michigan lake, where the strong wind is formed covering the entire city."
        },
        {
            heading: "Chicago 3 - Illinois, USA",
            des: "There are my friends with me on the trip"
        }
]

const pictures: string[] = [
    `/assets/travel/TN/1.JPG`,
    `/assets/travel/TN/2.JPG`,
    `/assets/travel/NC/1.jpg`,
    `/assets/travel/IL/1.JPG`,
    `/assets/travel/IL/3.JPG`,
    `/assets/travel/IL/2.JPG`
]

const collection:{
    [key: number]: {
        src: string,
        title: string
        des: string,
        link: string
    }
} = {
    1: {
        src: `/assets/travel/GA/1.jpg`,
        title: 'Georgia, USA',
        des: 'My friend from Georgia Tech',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    2: {
        src: `/assets/travel/GA/2.JPG`,
        title: 'Georgia, USA',
        des: 'Six Flags is popular for children to come to play',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    3: {
        src: `/assets/travel/GA/3.JPG`,
        title: 'Georgia, USA',
        des: 'Six Flags is popular for the 70mph roller coaster',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    4: {
        src: `/assets/travel/NC/2.JPG`,
        title: 'North Carolina, USA',
        des: 'A rest area on the way to the capital city of Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    5: {
        src: `/assets/travel/NC/5.JPG`,
        title: 'North Carolina, USA',
        des: 'A Lake in North Carolina',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    6: {
        src: `/assets/travel/NC/7.jpg`,
        title: 'North Carolina, USA',
        des: 'A chinese restaurant in Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    7: {
        src: `/assets/travel/IL/10.JPG`,
        title: 'Illinois, USA',
        des: 'The largest Starbucks in the world',
        link: 'https://maps.app.goo.gl/gPUNsWn8L95K8TSV8'
    },
    8: {
        src: `/assets/travel/IL/7.JPG`,
        title: 'Illinois, USA',
        des: 'Trump building - now the 47th President of the United States',
        link: 'https://maps.app.goo.gl/ihvzwEAsRnadtV1F9'
    },
    9: {
        src: `/assets/travel/IL/4.JPG`,
        title: 'Illinois, USA',
        des: 'Me standing around the crowd of people in Chicago',
        link: 'https://maps.app.goo.gl/imWgbSpx8byK6f529'
    }
}

export {pictureContent, pictures, collection}