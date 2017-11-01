const superagent = require('superagent')
const superagentGQL = require('superagent-graphql')

const baseURL = process.env.baseURL || 'http://localhost:5000'
const GRAPHQLPATH = '/graphql?'

function callApi(method = 'GET', path, GQLquery) {
  return new Promise((resolve, reject) => {
    const url = baseURL + path
    superagent[method.toLowerCase()](url)
      .use(GQLquery)
      .end((error,response) => {
        // console.log('APi Response ', response)
        if (error) {
          reject({ error, response })
        } else {
          resolve(response)
        }
    })
  })
}

export function getKPI() {
  const queryString = `
    query {
      kpis {
        type
        details {
          id
          type
          name
          current_value
          end_of_quarter_target
          current_value_state
          change_vs_last_month_state
        }
      }
    }
  `
  return callApi('POST', GRAPHQLPATH, superagentGQL(queryString, {}))
}
