import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import LinkInterface from '../interfaces/link';

const LinksTable = (props) => {
  const links = props.links.map((link) => {
    return (
      <TableRow key={link.id}>
        <TableCell>{link.title}</TableCell>
        <TableCell>{link.fullUrl}</TableCell>
        <TableCell>{link.shortUrl}</TableCell>
      </TableRow>
    );
  });

  return (
    <Grid className="linksTable" container>
      <Grid item xs={12} md={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Full Url</TableCell>
              <TableCell>Short Url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

LinksTable.propTypes = {
  links: PropTypes.arrayOf(LinkInterface)
};

export default LinksTable;
