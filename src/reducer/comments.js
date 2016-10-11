import { normalizedComments } from '../fixtures'
import {  } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return comments
}