define(["react", "app", "summernote", "cmpld/authorized/settings/rightpanel/rightTop"], function (React, app, summernote, RightTop) {
    "use strict";

    return React.createClass({
        getInitialState: function () {
            return {
                panel: {
                    firstPanelClass: "panel-body d-none",
                    secondPanelClass: "panel-body",
                    firstTab: "d-none",
                    secondTab: "active"
                },

                firstPanelData: {
                    showDisplayName: app.user.get("showDisplayName"),
                    displayName: app.user.get("displayName")
                },

                sessionExpiration: app.user.get("sessionExpiration"),
                mailPerPage: app.user.get("mailPerPage"),
                remeberPassword: app.user.get("remeberPassword"),

                secondPanelData: {
                    enableForwarding: app.user.get("enableForwarding"),
                    forwardingAddress: app.user.get("forwardingAddress"),
                    notificationSound: app.user.get("notificationSound"),
                    enableNotification: app.user.get("enableNotification"),
                    notificationAddress: app.user.get("notificationAddress")
                },
                defaultPGPStrength: app.user.get("defaultPGPKeybit"),

                emfValidator: {},
                emNotValidator: {}
            };
        },

        /**
         *
         */
        componentDidMount: function () {
            React.initializeTouchEvents(true);

            this.setState({ emfValidator: $("#forwForm").validate() });

            $("#emForwInp").rules("add", {
                email: true,
                required: true,
                minlength: 3,
                maxlength: 200
            });

            this.setState({ emNotValidator: $("#notForm").validate() });

            $("#emNotInp").rules("add", {
                email: true,
                required: true,
                minlength: 3,
                maxlength: 200
            });
        },
        ifSecondPanelSave: function () {
            if (this.state.sessionExpiration === app.user.get("sessionExpiration") && this.state.mailPerPage === app.user.get("mailPerPage") && this.state.remeberPassword === app.user.get("remeberPassword") && this.state.secondPanelData.enableForwarding === app.user.get("enableForwarding") && this.state.secondPanelData.forwardingAddress === app.user.get("forwardingAddress") && this.state.secondPanelData.notificationSound === app.user.get("notificationSound") && this.state.secondPanelData.enableNotification === app.user.get("enableNotification") && this.state.secondPanelData.notificationAddress === app.user.get("notificationAddress") && this.state.defaultPGPStrength === app.user.get("defaultPGPKeybit")) {
                return true;
            } else {
                return false;
            }
        },
        /**
         *
         * @param {string} i
         * @param {object} event
         */
        handleChange: function (i, event) {
            switch (i) {
                case "displayNameCheck":
                    this.setState({
                        firstPanelData: {
                            showDisplayName: !this.state.firstPanelData.showDisplayName,
                            displayName: this.state.firstPanelData.displayName
                        }
                    });
                    break;

                case "dispNameChange":
                    this.setState({
                        firstPanelData: {
                            showDisplayName: this.state.firstPanelData.showDisplayName,
                            displayName: event.target.value
                        }
                    });
                    break;

                case "remPass":
                    this.setState({
                        remeberPassword: !this.state.remeberPassword
                    });
                    break;

                case "mailPerPage":
                    this.setState({
                        mailPerPage: event.target.value
                    });
                    break;

                case "sessTime":
                    this.setState({
                        sessionExpiration: event.target.value
                    });
                    break;
                case "changeSound":
                    this.setState({
                        secondPanelData: {
                            enableForwarding: this.state.secondPanelData.enableForwarding,
                            forwardingAddress: this.state.secondPanelData.forwardingAddress,
                            notificationSound: event.target.value,
                            enableNotification: this.state.secondPanelData.enableNotification,
                            notificationAddress: this.state.secondPanelData.notificationAddress
                        }
                    });
                    break;
                case "enabForw":
                    this.setState({
                        secondPanelData: {
                            enableForwarding: !this.state.secondPanelData.enableForwarding,
                            forwardingAddress: this.state.secondPanelData.forwardingAddress,
                            notificationSound: this.state.secondPanelData.notificationSound,
                            enableNotification: this.state.secondPanelData.enableNotification,
                            notificationAddress: this.state.secondPanelData.notificationAddress
                        }
                    });

                    $("#emForwInp").removeClass("invalid");
                    $("#emForwInp").removeClass("valid");

                    var validator = $("#forwForm").validate();
                    validator.resetForm();
                    break;

                case "enabEmNot":
                    this.setState({
                        secondPanelData: {
                            enableForwarding: this.state.secondPanelData.enableForwarding,
                            forwardingAddress: this.state.secondPanelData.forwardingAddress,
                            notificationSound: this.state.secondPanelData.notificationSound,
                            enableNotification: !this.state.secondPanelData.enableNotification,
                            notificationAddress: this.state.secondPanelData.notificationAddress
                        }
                    });

                    $("#emNotInp").removeClass("invalid");
                    $("#emNotInp").removeClass("valid");

                    var validatornotForm = $("#notForm").validate();
                    validatornotForm.resetForm();

                    break;
                case "entEmNot":
                    this.setState({
                        secondPanelData: {
                            enableForwarding: this.state.secondPanelData.enableForwarding,
                            forwardingAddress: this.state.secondPanelData.forwardingAddress,
                            notificationSound: this.state.secondPanelData.notificationSound,
                            enableNotification: this.state.secondPanelData.enableNotification,
                            notificationAddress: event.target.value
                        }
                    });
                    break;

                case "entEmFow":
                    this.setState({
                        secondPanelData: {
                            enableForwarding: this.state.secondPanelData.enableForwarding,
                            forwardingAddress: event.target.value,
                            notificationSound: this.state.secondPanelData.notificationSound,
                            enableNotification: this.state.secondPanelData.enableNotification,
                            notificationAddress: this.state.secondPanelData.notificationAddress
                        }
                    });
                    break;

                case "pgpStr":
                    this.setState({
                        defaultPGPStrength: event.target.value
                    });
                    break;
            }
        },

        /**
         *
         * @param {string} i
         * @param {object} event
         */
        handleClick: function (i, event) {
            switch (i) {
                case "showUprof":
                    this.setState({
                        panel: {
                            firstPanelClass: "panel-body",
                            secondPanelClass: "panel-body d-none",
                            firstTab: "active",
                            secondTab: ""
                        }
                    });

                    break;
                case "showAccSett":
                    this.setState({
                        panel: {
                            firstPanelClass: "panel-body d-none",
                            secondPanelClass: "panel-body",
                            firstTab: "",
                            secondTab: "active"
                        }
                    });
                    break;
                case "hSessTime":
                    console.log("fff");
                    break;
                case "resetProfile":
                    this.setState({
                        firstPanelData: {
                            showDisplayName: app.user.get("showDisplayName"),
                            displayName: app.user.get("displayName")
                        }
                    });

                    if (app.user.get("includeSignature")) {
                        $("#signDiv").removeClass("div-readonly");
                    } else {
                        $("#signDiv").addClass("div-readonly");
                    }
                    break;

                case "resetAccSett":
                    this.setState({
                        sessionExpiration: app.user.get("sessionExpiration"),
                        mailPerPage: app.user.get("mailPerPage"),
                        remeberPassword: app.user.get("remeberPassword"),

                        secondPanelData: {
                            enableForwarding: app.user.get("enableForwarding"),
                            forwardingAddress: app.user.get("forwardingAddress"),
                            notificationSound: app.user.get("notificationSound"),
                            enableNotification: app.user.get("enableNotification"),
                            notificationAddress: app.user.get("notificationAddress")
                        }
                    });

                    $("#emNotInp").removeClass("invalid");
                    $("#emNotInp").removeClass("valid");

                    var validator = $("#notForm").validate();
                    validator.resetForm();

                    $("#emForwInp").removeClass("invalid");
                    $("#emForwInp").removeClass("valid");

                    var validatorforwForm = $("#forwForm").validate();
                    validatorforwForm.resetForm();

                    break;

                case "safeAccSett":
                    var emfValidator = this.state.emfValidator;
                    var emNotValidator = this.state.emNotValidator;

                    emfValidator.form();
                    emNotValidator.form();

                    if (emfValidator.numberOfInvalids() === 0 && emNotValidator.numberOfInvalids() === 0) {
                        $("#settings-spinner").removeClass("d-none").addClass("d-block");
                        app.user.set({
                            sessionExpiration: this.state.sessionExpiration
                        });
                        app.user.set({ mailPerPage: this.state.mailPerPage });
                        app.user.set({
                            defaultPGPKeybit: parseInt(this.state.defaultPGPStrength)
                        });

                        app.user.set({
                            remeberPassword: this.state.remeberPassword
                        });

                        if (!this.state.remeberPassword) {
                            app.user.set({ password: "" });
                            app.user.set({ secondPassword: "" });
                        }

                        app.userObjects.updateObjects("userProfile", "", function (response) {
                            if (response === "success") {} else if (response === "failed") {} else if (response === "nothing") {}
                        });
                        $("#settings-spinner").removeClass("d-block").addClass("d-none");
                    }

                    break;

                case "safeProfile":
                    app.user.set({
                        showDisplayName: this.state.firstPanelData.showDisplayName
                    });

                    if (this.state.firstPanelData.showDisplayName) {
                        app.user.set({
                            displayName: filterXSS(this.state.firstPanelData.displayName)
                        });
                    }

                    app.userObjects.updateObjects("userProfile1"); //obsolete
                    break;
            }
        },

        /**
         *
         * @returns {Array}
         * @constructor
         */
        PGPbitList: function () {
            var options = [];

            for (var i = 1024; i <= 5120; i += 1024) {
                if (i <= app.user.get("userPlan")["planData"]["pgpStr"]) {
                    options.push(React.createElement(
                        "option",
                        { key: i, value: i },
                        i,
                        " bits"
                    ));
                } else {
                    options.push(React.createElement(
                        "option",
                        { key: i, disabled: true, value: i },
                        i,
                        " bits"
                    ));
                }
            }

            return options;
            console.log(app.user.get("userPlan")["planData"]["pgpStr"]);
        },

        /**
         *
         * @returns {JSX}
         */
        render: function () {
            var showDisp = {
                visibility: !this.state.firstPanelData.showDisplayName ? "d-none" : ""
            };

            return React.createElement(
                "div",
                {
                    className: this.props.classes.rightClass,
                    id: "rightSettingPanel"
                },
                React.createElement(
                    "div",
                    { className: "setting-middle personal-info " },
                    React.createElement(
                        "div",
                        { className: "panel panel-default" },
                        React.createElement(
                            "div",
                            { className: "middle-top" },
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    {
                                        role: "presentation",
                                        className: this.state.panel.secondTab
                                    },
                                    React.createElement(
                                        "a",
                                        null,
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Account Settings"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "middle-content" },
                            React.createElement(
                                "div",
                                {
                                    className: this.state.panel.firstPanelClass
                                },
                                React.createElement(
                                    "div",
                                    { className: "form-section" },
                                    React.createElement(
                                        "div",
                                        { className: "row" },
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "h3",
                                                    {
                                                        className: "",
                                                        style: showDisp
                                                    },
                                                    this.state.firstPanelData.displayName,
                                                    React.createElement("br", null)
                                                ),
                                                "<",
                                                app.user.get("email"),
                                                ">"
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "label",
                                                    { className: "container-checkbox with-label" },
                                                    React.createElement("input", {
                                                        className: "pull-left",
                                                        type: "checkbox",
                                                        checked: this.state.firstPanelData.showDisplayName,
                                                        onChange: this.handleChange.bind(this, "displayNameCheck")
                                                    }),
                                                    React.createElement("span", { className: "checkmark" }),
                                                    "display name"
                                                ),
                                                React.createElement("input", {
                                                    type: "name",
                                                    className: "form-control",
                                                    readOnly: !this.state.firstPanelData.showDisplayName,
                                                    onChange: this.handleChange.bind(this, "dispNameChange"),
                                                    placeholder: "Enter name",
                                                    value: this.state.firstPanelData.displayName
                                                })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "form-section-bottom" },
                                        React.createElement(
                                            "div",
                                            { className: "btn-row" },
                                            React.createElement(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: "btn-border fixed-width-btn",
                                                    onClick: this.handleClick.bind(this, "resetProfile")
                                                },
                                                "Cancel"
                                            ),
                                            React.createElement(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: "btn-blue fixed-width-btn",
                                                    onClick: this.handleClick.bind(this, "safeProfile"),
                                                    disabled: this.state.firstPanelData.showDisplayName == app.user.get("showDisplayName") && this.state.firstPanelData.displayName == app.user.get("displayName")
                                                },
                                                "Save"
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                {
                                    className: this.state.panel.secondPanelClass
                                },
                                React.createElement(
                                    "div",
                                    { className: "form-section" },
                                    React.createElement(
                                        "div",
                                        { className: "row" },
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "select",
                                                    {
                                                        className: "form-select",
                                                        onChange: this.handleChange.bind(this, "sessTime"),
                                                        value: this.state.sessionExpiration
                                                    },
                                                    React.createElement(
                                                        "option",
                                                        {
                                                            value: "0",
                                                            disabled: true
                                                        },
                                                        "Select Session Time Out"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "-1" },
                                                        "Disable Timeout"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "600" },
                                                        "10 Minutes"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "1800" },
                                                        "30 Minutes"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "3600" },
                                                        "1 Hour"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "10800" },
                                                        "3 Hours"
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "select",
                                                    {
                                                        className: "form-select",
                                                        onChange: this.handleChange.bind(this, "mailPerPage"),
                                                        value: this.state.mailPerPage
                                                    },
                                                    React.createElement(
                                                        "option",
                                                        {
                                                            value: "0",
                                                            disabled: true
                                                        },
                                                        "Emails per page"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "10" },
                                                        "10 Emails per page"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "25" },
                                                        "25 Emails per page"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "50" },
                                                        "50 Emails per page"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "100" },
                                                        "100 Emails per page"
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "select",
                                                    {
                                                        className: "form-select",
                                                        onChange: this.handleChange.bind(this, "pgpStr"),
                                                        value: this.state.defaultPGPStrength
                                                    },
                                                    React.createElement(
                                                        "option",
                                                        {
                                                            value: "0",
                                                            disabled: true
                                                        },
                                                        "Default PGP bits"
                                                    ),
                                                    this.PGPbitList()
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col-12" },
                                            React.createElement(
                                                "div",
                                                { className: "form-group" },
                                                React.createElement(
                                                    "select",
                                                    {
                                                        className: "form-control",
                                                        onChange: this.handleChange.bind(this, "changeSound"),
                                                        value: this.state.secondPanelData.notificationSound
                                                    },
                                                    React.createElement(
                                                        "option",
                                                        {
                                                            value: "0",
                                                            disabled: true
                                                        },
                                                        "New Email Notification Sound"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "" },
                                                        "Disable Sound"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "10" },
                                                        "Bell"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "25" },
                                                        "lala"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "50" },
                                                        "lolo"
                                                    ),
                                                    React.createElement(
                                                        "option",
                                                        { value: "100" },
                                                        "lambada"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    {
                                        className: this.props.classes.classActSettSelect + " d-none"
                                    },
                                    React.createElement(
                                        "div",
                                        { className: "form-section" },
                                        React.createElement(
                                            "form",
                                            { id: "forwForm" },
                                            React.createElement(
                                                "div",
                                                { className: "row" },
                                                React.createElement(
                                                    "div",
                                                    { className: "form-group" },
                                                    React.createElement(
                                                        "label",
                                                        { className: "container-checkbox with-label" },
                                                        React.createElement("input", {
                                                            type: "checkbox",
                                                            checked: this.state.secondPanelData.enableForwarding,
                                                            onChange: this.handleChange.bind(this, "enabForw")
                                                        }),
                                                        React.createElement("span", { className: "checkmark" }),
                                                        "Enable Email Forwarding"
                                                    ),
                                                    React.createElement("input", {
                                                        type: "email",
                                                        name: "email",
                                                        id: "emForwInp",
                                                        className: "form-control with-icon icon-email",
                                                        disabled: !this.state.secondPanelData.enableForwarding,
                                                        placeholder: "Email Forward",
                                                        value: this.state.secondPanelData.forwardingAddress,
                                                        onChange: this.handleChange.bind(this, "entEmFow")
                                                    })
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    {
                                        className: this.props.classes.classActSettSelect + " d-none"
                                    },
                                    React.createElement(
                                        "div",
                                        { className: "form-section" },
                                        React.createElement(
                                            "form",
                                            { id: "notForm" },
                                            React.createElement(
                                                "div",
                                                { className: "row" },
                                                React.createElement(
                                                    "div",
                                                    { className: "col-12" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "form-group" },
                                                        React.createElement(
                                                            "label",
                                                            { className: "container-checkbox with-label" },
                                                            React.createElement("input", {
                                                                className: "pull-left",
                                                                type: "checkbox",
                                                                checked: this.state.secondPanelData.enableNotification,
                                                                onChange: this.handleChange.bind(this, "enabEmNot")
                                                            }),
                                                            React.createElement("span", { className: "checkmark" }),
                                                            "Enable Email Notification"
                                                        ),
                                                        React.createElement("input", {
                                                            type: "email",
                                                            name: "email",
                                                            id: "emNotInp",
                                                            className: "form-control with-icon icon-email",
                                                            disabled: !this.state.secondPanelData.enableNotification,
                                                            placeholder: "Email Notification",
                                                            value: this.state.secondPanelData.notificationAddress,
                                                            onChange: this.handleChange.bind(this, "entEmNot")
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-section-bottom" },
                                    React.createElement(
                                        "div",
                                        { className: "checkbox-left" },
                                        React.createElement(
                                            "label",
                                            { className: "container-checkbox with-label" },
                                            React.createElement("input", {
                                                type: "checkbox",
                                                checked: this.state.remeberPassword,
                                                onChange: this.handleChange.bind(this, "remPass")
                                            }),
                                            React.createElement("span", { className: "checkmark" }),
                                            "Remember Password for Session"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "btn-row" },
                                        React.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className: "btn-border fixed-width-btn",
                                                onClick: this.handleClick.bind(this, "resetAccSett")
                                            },
                                            "Cancel"
                                        ),
                                        React.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className: "btn-blue fixed-width-btn",
                                                disabled: this.ifSecondPanelSave(),
                                                onClick: this.handleClick.bind(this, "safeAccSett")
                                            },
                                            "Save"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "setting-right personal-info " },
                    React.createElement(RightTop, null),
                    React.createElement(
                        "div",
                        { className: "setting-right-data" },
                        React.createElement(
                            "div",
                            { className: "panel-heading" },
                            React.createElement(
                                "h2",
                                { className: "panel-title personal-info-title" },
                                "Help"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "panel-body" },
                            React.createElement(
                                "h3",
                                null,
                                "Default key strength bits"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Select the strength of the cryptography to be used for your key strength. A lower number of bits might improve speed but reduce security dramatically. A higher number of bits will take more time to process and open upon login and may not be supported by all devices if exported. The minimum recommended key strength is 2048 bits."
                            ),
                            React.createElement(
                                "h3",
                                null,
                                "Emails per page"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Select the number of emails you would like to be displayed per page in your inbox and folders."
                            ),
                            React.createElement(
                                "h3",
                                null,
                                "Timeout"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Select the amount of time before your current session logs out automatically and requires you to login again. You can select",
                                " ",
                                React.createElement(
                                    "b",
                                    null,
                                    "Disable Timeout"
                                ),
                                " to turn off this feature.(Not recommended)"
                            ),
                            React.createElement(
                                "h3",
                                null,
                                "Remember Password"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Check this box to keep your password in memory for the duration of the session. It will prevent the system from asking you every time you want to add or delete your email aliases or change to private keys. Enabling this feature can lower your security, if someone can gain access to your computer."
                            )
                        )
                    )
                )
            );
        }
    });
});