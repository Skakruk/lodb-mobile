import {grey600} from 'material-ui/styles/colors';

export default {
    loadingWrap: {
        display: 'flex',
        justifyContent: 'center',
        margin: [20, 0],
    },
    articleHeader: {
        position: 'relative'
    },
    articleCover: {
        marginTop: -64,
        width: '100%',
        zIndex: -1,
        position: 'relative'
    },
    articleHeaderActions: {
        background: {
            image: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: [8, 10]
    },
    articleContent: {
        padding: ['1em', 0]
    },
    container: {
        padding: [0, 10],
        '& h3': {
            margin: [5, 0],
            font: {
                size: 14,
                weight: 'normal'
            },
            color: grey600
        },
        '& h1': {
            fontSize: '1.2em',
            margin: [15, 0, 5]
        }
    }
}