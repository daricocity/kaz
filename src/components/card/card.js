import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/cardStyles";

const useStyles = makeStyles(styles);

export const Card = (props) => {
    const classes = useStyles();
    const { className, children, plain, profile, chart, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [classes.cardChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
        {children}
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    chart: PropTypes.bool,
    children: PropTypes.node
};

export const CardHeader = (props) => {
    const classes = useStyles();
    const { className, children, color, plain, stats, icon, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [className]: className !== undefined
    });
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    );
}
  
CardHeader.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
      "warning",
      "success",
      "danger",
      "info",
      "primary",
      "rose"
    ]),
    plain: PropTypes.bool,
    stats: PropTypes.bool,
    icon: PropTypes.bool,
    children: PropTypes.node
};

export const CardFooter = (props) => {
    const classes = useStyles();
    const { className, children, plain, profile, stats, chart, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile,
        [classes.cardFooterStats]: stats,
        [classes.cardFooterChart]: chart,
        [className]: className !== undefined
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
}
  
CardFooter.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    stats: PropTypes.bool,
    chart: PropTypes.bool,
    children: PropTypes.node
};

export const CardAvatar = (props) => {
    const classes = useStyles();
    const { children, className, plain, profile, ...rest } = props;
    const cardAvatarClasses = classNames({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [className]: className !== undefined
    });
    return (
        <div className={cardAvatarClasses} {...rest}>
            {children}
        </div>
    );
}
  
CardAvatar.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    profile: PropTypes.bool,
    plain: PropTypes.bool
};

export const CardBody = (props) => {
    const classes = useStyles();
    const { className, children, plain, profile, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
  }
  
CardBody.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    children: PropTypes.node
};

export const CardIcon = (props) => {
    const classes = useStyles();
    const { className, children, color, ...rest } = props;
    const cardIconClasses = classNames({
        [classes.cardIcon]: true,
        [classes[color + "CardHeader"]]: color,
        [className]: className !== undefined
    });
    return (
        <div className={cardIconClasses} {...rest}>
            {children}
        </div>
    );
}
  
CardIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
      "warning",
      "success",
      "danger",
      "info",
      "primary",
      "rose"
    ]),
    children: PropTypes.node
};
