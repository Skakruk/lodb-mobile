import {grey600} from 'material-ui/styles/colors'

export default {
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    articleHeader: {
        position: 'relative',
        maxHeight: 250,
        overflow: 'hidden'
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
            margin: [15, 0, 5]
        }
    }
}