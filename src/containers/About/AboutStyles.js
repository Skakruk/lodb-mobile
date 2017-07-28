export default {
    container: {
        fontSize: 14,
        padding: 5
    },
    eveningAbon: {
        textAlign: 'center'
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    },
    table: {
        fontSize: 12,

        '& tr': {
            '&:first-child td': {
                borderTop: 'none'
            }
        },

        '& td': {
            padding: 10,
            borderTop: '1px solid #9e9e9e',
        },
        '& th': {
            padding: 10,
            color: '#9e9e9e',
            fontWeight: 'normal'
        }

    }
}