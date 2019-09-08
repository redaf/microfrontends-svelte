import AsyncComponent from './AsyncComponent.svelte'

export default function asyncComponent({ prefix, loadManifest }) {
    class _AsyncComponent extends AsyncComponent {
        constructor(options) {
            options.props = { ...options.props, prefix, loadManifest }
            super(options)
        }
    }

    return _AsyncComponent
}
