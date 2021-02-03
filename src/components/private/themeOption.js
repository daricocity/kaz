const Settings = () => {
    return(
        <div>
            <div className="tb-theme-options tb-fade-tabs tb-tabs">
                <ul className="tb-theme-options-switch tb-mp0 tb-tab-links">
                    <li className="tb-active">
                        <a href="#set2">
                            <div className="tb-theme-options-switch-btn tb-theme-options-toggle-switch-btn">
                                <i className="material-icons">settings</i>
                                <span className="tb-theme-options-switch-tooltip"><span>Settings</span></span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="tb-theme-options-body tb-tab-content">
                    <div className="tb-theme-options-settings tb-tab tb-active" id="set2">
                        <h2 className="tb-theme-options-settings-heading">Settings</h2>
                        <div className="tb-theme-options-ui">
                            <div className="tb-height-b20 tb-height-lg-b20"></div>
                            <h3 className="tb-theme-options-settings-subheading">DISPLAY STYLE</h3>
                            <div className="tb-height-b10 tb-height-lg-b10"></div>
                            <ul className="tb-color-switcher tb-mp0">
                                <li className="tb-color-switch active-mode" data-color-mode="/assets/admin/css/style.css" data-chartjs-color="/assets/admin/js/chartjs.light.js">
                                <span className="tb-color-check"></span> Light Mode
                                </li>
                                <li className="tb-color-switch" data-color-mode="/assets/admin/css/classic-style.css" data-chartjs-color="/assets/admin/js/chartjs.classic.js">
                                <span className="tb-color-check"></span> Classic Mode
                                </li>
                                <li className="tb-color-switch" data-color-mode="/assets/admin/css/dark-style.css" data-chartjs-color="/assets/admin/js/chartjs.dark.js">
                                <span className="tb-color-check"></span> Dark Mode
                                </li>
                                <li className="tb-color-switch" data-color-mode="/assets/admin/css/black-style.css" data-chartjs-color="/assets/admin/js/chartjs.black.js">
                                <span className="tb-color-check"></span> Black Mode
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings