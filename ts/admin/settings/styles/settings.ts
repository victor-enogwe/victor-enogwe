import { CSSProperties } from '@wordpress/element'

export const settingStyles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: '3em',
    height: 'calc(100vh - 15em)',
    borderBottom: '1px solid #e8e8e8'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'top',
    width: '30vw',
    height: '100%',
    paddingLeft: 40,
    paddingRight: 40
  },
  page: {
    flex: 1
  },
  pageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 0,
    padding: '3em',
    borderBottom: '1px solid #e8e8e8'
  },
  pageContent: {
    display: 'flex',
    overflowY: 'scroll',
    padding: '3em',
    height:  '60%',
    borderBottom: '1px solid #e8e8e8'
  },
  maintenanceMode: {
    marginTop: 12
  },
  textWithIcon: {
    padding: '0 0 0 0.2em'
  },
  menuitem:  {
    padding: '1em',
    height: 'auto',
    border: 0,
    borderRadius: 0,
    borderBottom: '1px solid #e8e8e8'
  },
  content: {
    display: 'flex',
    background: '#ffffff',
    width: '70vw',
    height: '100%'
  },
  title: {
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center'
  },
  settingsAssetsPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  assetPage: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  assetImageContainer: {
    display: 'flex',
    margin: '0  auto'
  },
  placeholder: {
    width: 'auto',
    height: 'auto',
    minHeight: 'auto',
    backgroundColor: '#fff',
    padding: 0,
    fontSize: 0
  },
  assetImageButtons:  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em'
  },
  marginBottom: {
    marginBottom: '1em'
  }
}
