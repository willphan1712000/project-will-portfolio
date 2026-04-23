import getGoogleImage from "../utilities/getGoogleImage"

const pictureContent = [
        {
            title: "Lookout Mountain - Tennessee, USA",
            des: [""],
            picture: getGoogleImage("14iGkuZU2GkhQcq-VYV7LftdEZATJ64Y7")
        },
        {
            title: "Ruby Falls - Tennessee, USA",
            des: [""],
            picture: getGoogleImage("1cRVdrcdGIn9XlzsreCTfPHnad59uEPRZ")
        },
        {
            title: "North Carolina, USA",
            des: [""],
            picture: getGoogleImage("1ruyJXE8OG_s7S-kxYz_c8rcfnRYZDQ7Z")
        },
        {
            title: "Chicago 1 - Illinois, USA",
            des: ["This is THE BEAN at night"],
            picture: getGoogleImage("1lo-DtZ7fR08y6e2f1DIkvv5PgVLixR_m")
        },
        {
            title: "Chicago 2 - Illinois, USA",
            des: ["This picture was taken close to the Michigan lake, where the strong wind is formed covering the entire city."],
            picture: getGoogleImage("14Hzr5GPYi_iivTih9sj4t2Qlhi9LSH8E")
        },
        {
            title: "Chicago 3 - Illinois, USA",
            des: ["There are my friends with me on the trip"],
            picture: getGoogleImage("1TIdegt-YWMdLLQBZfISWI9M5rr0dSdZB")
        }
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
        src: getGoogleImage("1htQrHg2dlUae4ZtTVFQRnOreGmB17aKa"),
        title: 'Georgia, USA',
        des: 'My friend from Georgia Tech',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    2: {
        src: getGoogleImage("1qRbTUb8KkGW0jZqBM0Rw65Cu-e8v4oA8"),
        title: 'Georgia, USA',
        des: 'Six Flags is popular for children to come to play',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    3: {
        src: getGoogleImage("1Vv5yyoIQGC-0nSbv09MoyXSbyIMBuXUn"),
        title: 'Georgia, USA',
        des: 'Six Flags is popular for the 70mph roller coaster',
        link: 'https://maps.app.goo.gl/dphUL1yaANKUrce4A'
    },
    4: {
        src: getGoogleImage("1-WIpOmWb8fyXZCE8p5De5EJBpmf919Pb"),
        title: 'North Carolina, USA',
        des: 'A rest area on the way to the capital city of Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    5: {
        src: getGoogleImage("1nRMa-M8yXCSq7BjiYYgUv9V6YMyDGPmN"),
        title: 'North Carolina, USA',
        des: 'A Lake in North Carolina',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    6: {
        src: getGoogleImage("1z2Wo0GgIu8_1KAOgrMpYfg52hnbEoakc"),
        title: 'North Carolina, USA',
        des: 'A chinese restaurant in Raleigh',
        link: 'https://maps.app.goo.gl/UskWEgM2wK6zcZwj6'
    },
    7: {
        src: getGoogleImage("1oQtBfSmq0B7z5mslZ7VC_zlfkypowIXd"),
        title: 'Illinois, USA',
        des: 'The largest Starbucks in the world',
        link: 'https://maps.app.goo.gl/gPUNsWn8L95K8TSV8'
    },
    8: {
        src: getGoogleImage("1M0XUAgbLK4f4p_KCqytLqok_ROja8z9c"),
        title: 'Illinois, USA',
        des: 'Trump building - the 45th and 47th President of the United States',
        link: 'https://maps.app.goo.gl/ihvzwEAsRnadtV1F9'
    },
    9: {
        src: getGoogleImage("1OWTfIiwuPX3PhmxggIs0d6TSU51ZuwEY"),
        title: 'Illinois, USA',
        des: 'Me standing around the crowd of people in Chicago',
        link: 'https://maps.app.goo.gl/imWgbSpx8byK6f529'
    }
}

export {pictureContent, collection}