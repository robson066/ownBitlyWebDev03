import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import { Icon } from 'material-ui';
import { Link } from 'react-router-dom';

import LinkInterface from '../interfaces/link';
import UtilsApi from '../utils/utils_api';
import { CFG_HTTP } from '../cfg/cfg_http';

class LinksTable extends React.Component {
  
  handleDelete(id) {
    UtilsApi.delete(CFG_HTTP.URL_LINKS, {id}).then(() => {
      console.log('success');
      this.props.fetchLinks();
    })
  };

  generateRow = (link) => {
    return (
      <TableRow key={link.id}>
        <TableCell>{link.title}</TableCell>
        <TableCell>{link.fullUrl}</TableCell>
        <TableCell>{link.shortUrl}</TableCell>
        <TableCell className="linksTable__delete">
          <Icon onClick={() => this.handleDelete(link.id)}>delete</Icon>
        </TableCell>
        <TableCell className="linksTable__edit">
          <Link to={`/edit/${link.id}`}>
            <Icon>mode_edit</Icon>
          </Link>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    const links = this.props.links.map(this.generateRow);

    return (
      <Grid className="linksTable" container>
        <Grid item xs={12} md={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Full Url</TableCell>
                <TableCell>Short Url</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Modify</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {links}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }

}

LinksTable.propTypes = {
  links: PropTypes.arrayOf(LinkInterface),
  fetchLinks: PropTypes.func
};

export default LinksTable;
