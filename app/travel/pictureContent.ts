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
    `/assets/Travel/TN/1.jpg`,
    `/assets/Travel/TN/2.jpg`,
    `/assets/Travel/NC/1.jpg`,
    `/assets/Travel/IL/1.jpg`,
    `/assets/Travel/IL/3.jpg`,
    `/assets/Travel/IL/2.jpg`
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
        src: `/assets/Travel/GA/1.jpg`,
        title: 'Georgia, USA',
        des: 'My friend from Georgia Tech',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    2: {
        src: `/assets/Travel/GA/2.jpg`,
        title: 'Georgia, USA',
        des: 'Six Flags is popular for children to come to play',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    3: {
        src: `/assets/Travel/GA/3.jpg`,
        title: 'Georgia, USA',
        des: 'Six Flags is popular for the 70mph roller coaster',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    4: {
        src: `/assets/Travel/NC/2.jpg`,
        title: 'North Carolina, USA',
        des: 'A rest area on the way to the capital city of Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    5: {
        src: `/assets/Travel/NC/5.jpg`,
        title: 'North Carolina, USA',
        des: 'A Lake in North Carolina',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    6: {
        src: `/assets/Travel/NC/7.jpg`,
        title: 'North Carolina, USA',
        des: 'A chinese restaurant in Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    7: {
        src: `/assets/Travel/IL/10.jpg`,
        title: 'Illinois, USA',
        des: 'The largest Starbucks in the world',
        link: 'https://maps.app.goo.gl/gPUNsWn8L95K8TSV8'
    },
    8: {
        src: `/assets/Travel/IL/7.jpg`,
        title: 'Illinois, USA',
        des: 'Trump building - now the 47th President of the United States',
        link: 'https://maps.app.goo.gl/ihvzwEAsRnadtV1F9'
    },
    9: {
        src: `/assets/Travel/IL/4.jpg`,
        title: 'Illinois, USA',
        des: 'Me standing around the crowd of people in Chicago',
        link: 'https://maps.app.goo.gl/imWgbSpx8byK6f529'
    }
}

export {pictureContent, pictures, collection}