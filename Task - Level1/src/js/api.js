import React from "react";
import axios from 'axios'

import {
    AJAX_REQUEST,
    AJAX_SUCCESS,
    AJAX_ERROR
} from '../constants/appConstants'

export function ajaxRequestFunction(requestData) {
    var url = 'http://youURL';
    var request = requestData;
    return (dispatch) => {
        dispatch({
            type: AJAX_REQUEST,
            payload: {}
        })
        axios.post(url, request)
            .then(result => {
                dispatch({
                    type: AJAX_SUCCESS,
                    payload: {
                        result: result.data,
                    }
                })
            })
            .catch(error => {
                dispatch({
                    type: AJAX_ERROR,
                    payload: {},
                    errors: error
                })
            })
    }
}