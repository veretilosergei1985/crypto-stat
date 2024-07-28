//import axios from 'axios';

const patients = {
    namespaced: true,

    state: () => ({
        loading: null,
        customer: null,
        subscription: null,
        spends: null,
        latestTransaction: null,
        latestOrder: null,
        shipments: null,
    }),

    mutations: {
        updateLoading(state, data) {
            state.loading = data;
        },
        updateSpends(state, data) {
            state.spends = data;
        },
        updateCustomer(state, {customer, subscription, spends, latestTransaction, latestOrder, shipments}) {
            state.customer = {...customer};
            state.subscription = {...subscription};
            state.spends = spends;
            state.latestTransaction = latestTransaction;
            state.latestOrder = latestOrder;
            state.shipments = shipments;
        },
        updateSubscription(state, subscription) {
            state.subscription = subscription;
        },
        rewriteSubscription(state, subscription) {
            state.subscription = {...state.subscription, ...subscription};
        },
        updateShipments(state, shipments) {
            state.shipments = shipments;
        },
        updateCustomerInfo(state, data) {
            state.customer = {...state.customer, ...data};
        }
    },

    actions: {
        // loadCredit({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         axios.get(Routing.generate('app_patients_credit_add', {'id': customerId}))
        //             .then( ({ data }) => {
        //                 commit('updateCredit', data.authorizedCredit);
        //                 resolve();
        //             })
        //     });
        // },
        //
        // loadCustomer({ commit, state }, customerId) {
        //     let currentLoad = state.loading;
        //     commit('updateLoading', customerId);
        //     return new Promise((resolve, reject) => {
        //         if(state.customer && state.customer.id === customerId) {
        //             commit('updateLoading', false);
        //             resolve();
        //         } else if(currentLoad !== customerId) {
        //             axios.get(Routing.generate('app_patients_by_id', {'id': customerId}))
        //                 .then( ({ data }) => {
        //                     commit('updateLoading', false);
        //                     commit('updateCustomer', data.customerDetails);
        //                     resolve();
        //                 })
        //         }
        //     });
        // },
        //
        // loadSpends({ commit, state }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         axios.get(Routing.generate('app_patients_by_id', {'id': customerId}))
        //             .then( ({ data }) => {
        //                 commit('updateSpends', data.customerDetails.spends);
        //                 resolve();
        //             })
        //     });
        // },
        //
        // addCredit({ commit, dispatch }, {customerId, reason, amount}) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //         formData.append('add_credit[amount]', amount);
        //         formData.append('add_credit[reason]', reason);
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_credit_add', {'id': customerId}),
        //             data: formData
        //         })
        //             .then(({data}) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('updateSpends', data.spends);
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        // setNextShipDate({ commit, dispatch }, { customerId, nextShipDate }) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //         formData.append('set_next_ship_date[nextShipDate]', nextShipDate);
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_set_next_ship_date', {'id': customerId}),
        //             data: formData
        //         })
        //             .then(({data}) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     commit('updateCustomer', data.customerDetails);
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        // block({ commit }, {customerId, reason}) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //         formData.append('block[reason]', reason);
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_block', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('updateCustomer', data.customerDetails);
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // cancel({ commit }, {customerId, reason}) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //         formData.append('cancel[reason]', reason);
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_subscription_cancel', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('updateShipments', data.shipments);
        //                     commit('rewriteSubscription', data.subscription);
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        //
        // pause({ commit }, {customerId, period}) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //         formData.append('pause[period]', period);
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_subscription_pause', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('updateShipments', data.shipments);
        //                     commit('rewriteSubscription', data.subscription);
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        //
        // reactivate({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_subscription_reactivate', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('updateShipments', data.shipments);
        //                     commit('rewriteSubscription', data.subscription);
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        //
        // unblock({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_unblock', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('updateCustomer', data.customerDetails);
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // sendIntakeLink({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_send_intake_link', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // sendBillingLink({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_send_billing_link', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // sendMagicLoginLink({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_send_magic_login_link', {'customerId': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // sendCancelationInstructionsLink({ commit }, customerId) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_send_cancelation_instructions', {'id': customerId}),
        //             data: formData
        //         })
        //             .then( ({ data }) => {
        //                 commit('flashes/addFlash', data.flash, {root: true});
        //                 resolve();
        //             });
        //     });
        // },
        //
        // cancelOrder({ commit, dispatch }, {orderId}) {
        //     return new Promise((resolve, reject) => {
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_order_cancel_incomplete', {'orderId': orderId}),
        //             data: new FormData()
        //         })
        //             .then(({data}) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        //
        // billNow({ commit, dispatch }, {customerId}) {
        //     return new Promise((resolve, reject) => {
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_order_bill_now', {'customerId': customerId}),
        //             data: new FormData()
        //         })
        //             .then( ({ data }) => {
        //                 if (data.error) {
        //                     reject(data.error);
        //                 } else {
        //                     commit('flashes/addFlash', data.flash, {root: true});
        //                     commit('updateCustomer', data.customerDetails);
        //                     resolve();
        //                 }
        //             });
        //     });
        // },
        //
        // fulfillmentNotifyCustomer({ commit }, { customerId, trackingNumber }) {
        //     return new Promise((resolve, reject) => {
        //         const formData = new FormData();
        //
        //         axios({
        //             method: 'post',
        //             url: Routing.generate('app_patients_tracking_notify', { 'customerId': customerId, 'trackingNumber': trackingNumber }),
        //             data: formData
        //         })
        //         .then( ({ data }) => {
        //             commit('flashes/addFlash', data.flash, {root: true});
        //             resolve();
        //         });
        //     });
        // },
    },

    getters: {
        hasSubscription: state => {
            return state.subscription && state.subscription.status;
        },

        isActiveSubscription: state => {
            if (!state.subscription || !state.subscription.status) {
                return false;
            }

            return state.subscription.status === 'active'
                || state.subscription.status === 'recycle_billing'
                || state.subscription.status === 'recycle_failed';
        },

        isPausedSubscription: state => {
            return state.subscription && state.subscription.status === 'paused';
        },

        isCancelledSubscription: state => {
            return state.subscription && state.subscription.status === 'cancelled';
        },

        hasPendingOrder: state => {
            if (!state.subscription) {
                return false;
            }

            return state.subscription.hasPendingOrder;
        },

        lastShipAt: state => {
            if (!state.subscription) {
                return false;
            }

            return state.subscription.lastShipAt;
        },
    }
}

export default patients;
