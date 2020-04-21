import React from "react";
import { _t } from "../../../languageHandler";
// import * as sdk from "../../../index";
import PropTypes from "prop-types";
import { ValidatedServerConfig } from "../../../utils/AutoDiscoveryUtils";

export default class SignInToText extends React.PureComponent {
    static propTypes = {
        serverConfig: PropTypes.instanceOf(ValidatedServerConfig).isRequired,
        onEditServerDetailsClick: PropTypes.func,
    };

    render() {
        let signInToText = _t("Sign in to your PotNG account", {
            // serverName: this.props.serverConfig.hsName,
        });
        if (this.props.serverConfig.hsNameIsDifferent) {
            const TextWithTooltip = sdk.getComponent("elements.TextWithTooltip");

            signInToText = _t(
                "Sign in to your PotNG account",
                //  {}, {
                // 'underlinedServerName': () => {
                //     return <TextWithTooltip
                //         class="mx_Login_underlinedServerName"
                //         tooltip={this.props.serverConfig.hsUrl}
                //     >
                //         {this.props.serverConfig.hsName}
                //     </TextWithTooltip>;
                // },
                // }
            );
        }

        let editLink = null;
        if (this.props.onEditServerDetailsClick) {
            editLink = <a className="mx_AuthBody_editServerDetails"
                          href="#" onClick={this.props.onEditServerDetailsClick}
            >
                {_t('Change')}
            </a>;
        }

        return (
            <h3>
                {signInToText}
                {/* {editLink} */}
            </h3>
        );
    }
}
