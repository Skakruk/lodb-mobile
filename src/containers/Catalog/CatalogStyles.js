import {grey200, grey500, grey800} from 'material-ui/styles/colors'

export default {
    fieldSet: {
        margin: [0, '1em', '0.5em']
    },
    resultsContainer: {
        margin: [0, '0.5em']
    },
    resultItem: {
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;',
        padding: ['1em'],
        '& h4': {
            margin: [0, 0, 5]
        },
        '& p': {
            margin: ['0.5em', 0, 0]
        },
        '&:hover': {
            backgroundColor: grey200
        }
    },
    source: {
        margin: ['0.3em', 0],
        display: 'block',
        fontStyle: 'italic'
    },
    categoriesList: {
        display: 'flex',
        margin: ['0.5em', 0, 0],
        overflow: 'hidden',
        '& span': {
            color: grey500,
            margin: [0, '0.5em'],
            textTransform: 'lowercase',
            fontSize: 'smaller',
            '&:first-child': {
                marginLeft: 0
            }
        }
    },
    foundResultsCount: {
        color: grey800,
        margin: ['0.8em', 0, 0],
        fontSize: '0.9em',
        fontWeight: 'normal',
        textAlign: 'right'
    },
    loadingWrap: {
        display: 'flex',
        justifyContent: 'center',
        margin: [20, 0],
    }
}