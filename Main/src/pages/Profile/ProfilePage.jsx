import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Chip,
  Container,
  Tabs,
  Tab
} from '@mui/material'
import { 
  Person as PersonIcon,
  AccountBalanceWallet as WalletIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material'
import './ProfilePage.scss'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    username: 'casinoplayer123',
    email: 'player@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567',
    country: 'United States',
    currency: 'USD'
  })

  const [editData, setEditData] = useState({ ...profileData })

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditData({ ...profileData })
  }

  const handleSave = () => {
    setProfileData({ ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({ ...profileData })
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }))
  }

  const recentTransactions = [
    {
      id: 1,
      type: 'Deposit',
      amount: '+$500.00',
      date: '2024-01-15 14:30',
      status: 'Completed',
      color: 'success'
    },
    {
      id: 2,
      type: 'Bet',
      amount: '-$25.00',
      date: '2024-01-15 13:45',
      status: 'Completed',
      color: 'error'
    },
    {
      id: 3,
      type: 'Win',
      amount: '+$150.00',
      date: '2024-01-15 12:20',
      status: 'Completed',
      color: 'success'
    },
    {
      id: 4,
      type: 'Withdrawal',
      amount: '-$200.00',
      date: '2024-01-14 16:15',
      status: 'Pending',
      color: 'warning'
    }
  ]

  const settings = [
    {
      title: 'Email Notifications',
      description: 'Receive notifications about promotions and updates',
      icon: NotificationsIcon,
      enabled: true
    },
    {
      title: 'SMS Notifications',
      description: 'Receive SMS notifications for important updates',
      icon: NotificationsIcon,
      enabled: false
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      icon: SecurityIcon,
      enabled: true
    }
  ]

  return (
    <Box className="profile-page">
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box className="page-header">
          <Typography variant="h1" className="page-title">
            Profile & Settings
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item xs={12} md={4}>
            <Card className="profile-card">
              <CardContent className="profile-header">
                <Avatar 
                  sx={{ width: 100, height: 100, bgcolor: 'primary.main', fontSize: '2rem' }}
                  className="profile-avatar"
                >
                  {profileData.firstName[0]}{profileData.lastName[0]}
                </Avatar>
                <Typography variant="h4" className="profile-name">
                  {profileData.firstName} {profileData.lastName}
                </Typography>
                <Typography variant="body1" color="text.secondary" className="profile-username">
                  @{profileData.username}
                </Typography>
                <Chip label="Verified" color="success" className="verification-badge" />
              </CardContent>

              <Divider />

              <CardContent className="profile-stats">
                <Box className="stat-item">
                  <Typography variant="body2" color="text.secondary">
                    Member Since
                  </Typography>
                  <Typography variant="h6">
                    January 2024
                  </Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="body2" color="text.secondary">
                    Total Bets
                  </Typography>
                  <Typography variant="h6" color="primary">
                    1,234
                  </Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="body2" color="text.secondary">
                    Win Rate
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    68.5%
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Balance Card */}
            <Card className="balance-card">
              <CardContent>
                <Box className="balance-header">
                  <WalletIcon className="balance-icon" />
                  <Typography variant="h6">Account Balance</Typography>
                </Box>
                <Typography variant="h3" className="balance-amount">
                  $1,234.56
                </Typography>
                <Box className="balance-actions">
                  <Button variant="contained" color="primary" fullWidth>
                    Deposit
                  </Button>
                  <Button variant="outlined" color="primary" fullWidth>
                    Withdraw
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={8}>
            <Card className="content-card">
              <CardContent>
                <Tabs value={activeTab} onChange={handleTabChange} className="profile-tabs">
                  <Tab label="Profile" icon={<PersonIcon />} />
                  <Tab label="History" icon={<HistoryIcon />} />
                  <Tab label="Settings" icon={<SettingsIcon />} />
                </Tabs>

                {/* Profile Tab */}
                {activeTab === 0 && (
                  <Box className="tab-content">
                    <Box className="tab-header">
                      <Typography variant="h5">Personal Information</Typography>
                      {!isEditing ? (
                        <Button
                          variant="outlined"
                          startIcon={<EditIcon />}
                          onClick={handleEdit}
                        >
                          Edit
                        </Button>
                      ) : (
                        <Box className="edit-actions">
                          <Button
                            variant="contained"
                            startIcon={<SaveIcon />}
                            onClick={handleSave}
                            color="primary"
                          >
                            Save
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        </Box>
                      )}
                    </Box>

                    <Grid container spacing={3} className="profile-form">
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          value={isEditing ? editData.firstName : profileData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          value={isEditing ? editData.lastName : profileData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Email"
                          value={isEditing ? editData.email : profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone"
                          value={isEditing ? editData.phone : profileData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Country"
                          value={isEditing ? editData.country : profileData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Currency"
                          value={isEditing ? editData.currency : profileData.currency}
                          onChange={(e) => handleInputChange('currency', e.target.value)}
                          disabled={!isEditing}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                )}

                {/* History Tab */}
                {activeTab === 1 && (
                  <Box className="tab-content">
                    <Typography variant="h5" className="tab-header">Recent Transactions</Typography>
                    <List className="transactions-list">
                      {recentTransactions.map((transaction) => (
                        <ListItem key={transaction.id} className="transaction-item">
                          <ListItemIcon>
                            <WalletIcon color={transaction.color} />
                          </ListItemIcon>
                          <ListItemText
                            primary={transaction.type}
                            secondary={transaction.date}
                          />
                          <ListItemSecondaryAction>
                            <Box className="transaction-details">
                              <Typography variant="body1" color={transaction.color}>
                                {transaction.amount}
                              </Typography>
                              <Chip 
                                label={transaction.status} 
                                color={transaction.status === 'Completed' ? 'success' : 'warning'}
                                size="small"
                              />
                            </Box>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                    <Box className="view-all-container">
                      <Button variant="text" color="primary">
                        View All Transactions
                      </Button>
                    </Box>
                  </Box>
                )}

                {/* Settings Tab */}
                {activeTab === 2 && (
                  <Box className="tab-content">
                    <Typography variant="h5" className="tab-header">Account Settings</Typography>
                    <List className="settings-list">
                      {settings.map((setting, index) => (
                        <ListItem key={index} className="setting-item">
                          <ListItemIcon>
                            <setting.icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={setting.title}
                            secondary={setting.description}
                          />
                          <ListItemSecondaryAction>
                            <Switch
                              edge="end"
                              checked={setting.enabled}
                              color="primary"
                            />
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProfilePage
