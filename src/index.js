import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'rc-dialog';

class PreventTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextPath: null,
            prevent: true,
            openModal: false
        };
        this.makeTransition = this._makeTransition.bind(this);
        this.cancelModal = this._cancelModal.bind(this);
    }

    _makeTransition () {
        this.setState({
            prevent: false,
            openModal: false
        }, () => {
            this.props.callback('ok');
            this.context.router.history.push(this.state.nextPath);
        });
    };

    enable() {
        if (this.unblock) this.unblock();
        this.unblock = this.context.router.history.block((nextLocation)=> {
            if(this.props.when && this.state.prevent) {
                this.setState({ nextPath: nextLocation.pathname, openModal: true });
            }
            return !this.props.when || !this.state.prevent;
        })}

    disable() {
        if (this.unblock) {
            this.unblock();
            this.unblock = null
        }
    }

    componentWillMount() {
        if (this.props.when)
            this.enable(this.props.message)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.when) {
            if (!this.props.when)
                this.enable(nextProps.message)
        } else {
            this.disable()
        }
    }

    componentWillUnmount() {
        this.disable()
    }

    _cancelModal() {
        this.setState({ nextPath: null, prevent: true, openModal: false }, () => {
            this.props.callback('cancel')
        })
    };

    _renderFooter() {
        const { okText, cancelText} = this.props;
        return (
            <div className="prevent-buttons">
                <button className="rc-btn rc-default " onClick={this.cancelModal}>
                    {okText}
                </button>
                <button className="rc-btn rc-primary" onClick={this.makeTransition} >
                    {cancelText}
                </button>
            </div>
        )
    }
    render() {
        const { when, message, okText, cancelText, title, width, closable } = this.props;
        const { openModal } = this.state;

        return (
            <div>
                {openModal &&
                <Dialog
                    visible={this.state.openModal}
                    onOk={this.makeTransition}
                    onClose={this.cancelModal}
                    closable={closable}
                    width={width}
                    maskClosable={false}
                    footer={this._renderFooter()}
                    wrapClassName="vertical-center-modal"
                    title={title}
                    animation="zoom"
                    maskAnimation="fade"
                >
                    <p>{message}</p>
                </Dialog>}
            </div>
        )
    }
}

PreventTransition.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.shape({
            block: PropTypes.func.isRequired
        }).isRequired
    }).isRequired
};

PreventTransition.propTypes = {
    when: PropTypes.bool.isRequired,
    callback: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.node,
    message: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    wrapClassName: PropTypes.string,
    closable: PropTypes.bool,

};
PreventTransition.defaultProps = {
    when: false,
    closable: true,
    okText: 'Stay on this page',
    cancelText: 'Leave this page',
    title: 'Leave Page?',
    wrapClassName: '',
    message: 'Do you want to leave without finishing?',
    width: 400,
    callback: () => {}
};

export default PreventTransition
